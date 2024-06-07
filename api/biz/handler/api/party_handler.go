// Code generated by hertz generator.

package api

import (
	"bocchi/api/biz/rpc"
	"bocchi/kitex_gen/party"
	"bocchi/pkg/errno"
	"bocchi/pkg/pack"
	"context"

	api "bocchi/api/biz/model/api"
	"github.com/cloudwego/hertz/pkg/app"
	"github.com/cloudwego/hertz/pkg/protocol/consts"
)

// CreateParty .
// @Summary create_party
// @Description create party
// @Accept json/form
// @Produce json
// @Param title query string true "标题"
// @Param content query string true "介绍"
// @Param type query string true "类型"
// @Param province query string true "活动省份"
// @Param city query string true "活动城市"
// @Param start_time query string true "开始时间(例:2006-01-02)"
// @Param end_time query string true "结束时间(例:2006-01-02)"
// @Param access-token header string true "access-token"
// @Param refresh-token header string false "refresh-token"
// @router /bocchi/party/create [POST]
func CreateParty(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.CreatePartyRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.CreatePartyResponse)

	v, _ := c.Get("current_user_id")
	id, _ := v.(int64)

	rpcResp, err := rpc.PartyCreate(ctx, &party.CreatePartyRequest{
		FounderId: id,
		Title:     req.Title,
		Content:   req.Content,
		Type:      req.Type,
		Province:  req.Province,
		City:      req.City,
		StartTime: req.StartTime,
		EndTime:   req.EndTime,
	})
	if err != nil {
		pack.SendRPCFailResp(c, err)
		return
	}
	resp.Base = pack.ConvertToAPIBaseResp(rpcResp.Base)
	if resp.Base.Code != errno.SuccessCode {
		c.JSON(consts.StatusOK, resp)
		return
	}
	resp.Party = pack.ConvertToAPIParty(rpcResp.Party)
	c.JSON(consts.StatusOK, resp)
}

// JoinParty .
// @Summary apply_party
// @Description apply to join the party
// @Accept json/form
// @Produce json
// @Param party_id query int true "活动id"
// @Param access-token header string true "access-token"
// @Param refresh-token header string false "refresh-token"
// @router /bocchi/party/apply [GET]
func JoinParty(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.JoinPartyRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.JoinPartyResponse)

	v, _ := c.Get("current_user_id")
	id, _ := v.(int64)

	rpcResp, err := rpc.PartyJoin(ctx, &party.JoinPartyRequest{
		PartyId:  req.PartyID,
		MemberId: id,
	})
	if err != nil {
		pack.SendRPCFailResp(c, err)
		return
	}
	resp.Base = pack.ConvertToAPIBaseResp(rpcResp.Base)
	c.JSON(consts.StatusOK, resp)
}

// ApplyList .
// @Summary apply_list
// @Description show party's applicants
// @Accept json/form
// @Produce json
// @Param party_id query int true "活动id"
// @Param page_num query int true "页码"
// @Param access-token header string true "access-token"
// @Param refresh-token header string false "refresh-token"
// @router /bocchi/party/apply/list [GET]
func ApplyList(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.ApplyListRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.ApplyListResponse)

	v, _ := c.Get("current_user_id")
	id, _ := v.(int64)
	if req.PageNum < 1 {
		req.PageNum = 1
	}
	rpcResp, err := rpc.PartyApplyList(ctx, &party.ApplyListRequest{
		PartyId: req.PartyID,
		PageNum: req.PageNum,
		UserId:  id,
	})
	if err != nil {
		pack.SendRPCFailResp(c, err)
		return
	}
	resp.Base = pack.ConvertToAPIBaseResp(rpcResp.Base)
	if resp.Base.Code != errno.SuccessCode {
		c.JSON(consts.StatusOK, resp)
		return
	}
	resp.ApplicantCount = rpcResp.ApplicantCount
	resp.ApplicantList = pack.ConvertToAPIUsers(rpcResp.ApplicantList)
	c.JSON(consts.StatusOK, resp)
}

// PermitJoin .
// @Summary permit_join
// @Description permit user to join the party
// @Accept json/form
// @Produce json
// @Param party_id query int true "活动id"
// @Param member_id query int true "用户id"
// @Param access-token header string true "access-token"
// @Param refresh-token header string false "refresh-token"
// @router /bocchi/party/apply/permit [GET]
func PermitJoin(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.PermitJoinRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.PermitJoinResponse)

	v, _ := c.Get("current_user_id")
	id, _ := v.(int64)

	rpcResp, err := rpc.PartyPermitJoin(ctx, &party.PermitJoinRequest{
		PartyId:  req.PartyID,
		MemberId: req.MemberID,
		UserId:   id,
	})
	if err != nil {
		pack.SendRPCFailResp(c, err)
		return
	}
	resp.Base = pack.ConvertToAPIBaseResp(rpcResp.Base)

	c.JSON(consts.StatusOK, resp)
}

// GetPartyMembers .
// @Summary get_party_members
// @Description get members who have join the party
// @Accept json/form
// @Produce json
// @Param party_id query int true "活动id"
// @Param page_num query int true "页码"
// @router /bocchi/party/members [GET]
func GetPartyMembers(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.GetPartyMembersRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.GetPartyMembersResponse)

	if req.PageNum < 1 {
		req.PageNum = 1
	}
	rpcResp, err := rpc.PartyMembersList(ctx, &party.GetPartyMembersRequest{
		PartyId: req.PartyID,
		PageNum: req.PageNum,
	})
	if err != nil {
		pack.SendRPCFailResp(c, err)
		return
	}
	resp.Base = pack.ConvertToAPIBaseResp(rpcResp.Base)
	if resp.Base.Code != errno.SuccessCode {
		c.JSON(consts.StatusOK, resp)
		return
	}
	resp.MemberCount = rpcResp.MemberCount
	resp.MemberList = pack.ConvertToAPIUsers(rpcResp.MemberList)
	c.JSON(consts.StatusOK, resp)
}

// SearchParty .
// @Summary search_party
// @Description search party
// @Accept json/form
// @Produce json
// @Param content query string false "搜索内容"
// @Param party_type query string false "活动类型"
// @Param province query string false "活动省份"
// @Param city query string false "活动城市"
// @Param start_time_duration query int false "几天后开始"
// @Param search_type query int false "搜索方式(0:默认;1:按开始时间;2:按活动已有人数)"
// @Param page_num query int true "页码"
// @router /bocchi/party/search [POST]
func SearchParty(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.SearchPartyRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.SearchPartyResponse)

	if req.PageNum < 1 {
		req.PageNum = 1
	}
	rpcResp, err := rpc.PartySearch(ctx, &party.SearchPartyRequest{
		Content:           req.Content,
		PartyType:         req.PartyType,
		Province:          req.Province,
		City:              req.City,
		StartTimeDuration: req.StartTimeDuration,
		SearchType:        req.SearchType,
		PageNum:           req.PageNum,
	})
	if err != nil {
		pack.SendRPCFailResp(c, err)
		return
	}
	resp.Base = pack.ConvertToAPIBaseResp(rpcResp.Base)
	if resp.Base.Code != errno.SuccessCode {
		c.JSON(consts.StatusOK, resp)
		return
	}
	resp.PartyCount = rpcResp.PartyCount
	resp.PartyList = pack.ConvertToAPIParties(rpcResp.PartyList)
	c.JSON(consts.StatusOK, resp)
}

// GetPartyInfo .
// @Summary get_party_info
// @Description get party info by id
// @Accept json/form
// @Produce json
// @Param party_id query int true "活动id"
// @router /bocchi/party/get [GET]
func GetPartyInfo(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.GetPartyInfoRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.GetPartyInfoResponse)

	rpcResp, err := rpc.GetPartyInfo(ctx, &party.GetPartyInfoRequest{
		PartyId: req.PartyID,
	})
	if err != nil {
		pack.SendRPCFailResp(c, err)
		return
	}
	resp.Base = pack.ConvertToAPIBaseResp(rpcResp.Base)
	if resp.Base.Code != errno.SuccessCode {
		c.JSON(consts.StatusOK, resp)
		return
	}
	resp.Party = pack.ConvertToAPIParty(rpcResp.Party)
	c.JSON(consts.StatusOK, resp)
}

// GetMyParties .
// @Summary get_my_parties
// @Description get my parties
// @Accept json/form
// @Produce json
// @Param page_num query int true "页码"
// @Param access-token header string true "access-token"
// @Param refresh-token header string false "refresh-token"
// @router /bocchi/party/party/my [GET]
func GetMyParties(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.GetMyPartiesRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.GetMyPartiesResponse)

	v, _ := c.Get("current_user_id")
	id, _ := v.(int64)

	rpcResp, err := rpc.GetMyParties(ctx, &party.GetMyPartiesRequest{
		UserId:  id,
		PageNum: req.PageNum,
	})
	if err != nil {
		pack.SendRPCFailResp(c, err)
		return
	}
	resp.Base = pack.ConvertToAPIBaseResp(rpcResp.Base)
	if resp.Base.Code != errno.SuccessCode {
		c.JSON(consts.StatusOK, resp)
		return
	}
	resp.PartyCount = rpcResp.PartyCount
	resp.PartyList = pack.ConvertToAPIParties(rpcResp.PartyList)
	c.JSON(consts.StatusOK, resp)
}

// ChangePartyStatus .
// @Summary change_party_status
// @Description delete or finish party
// @Accept json/form
// @Produce json
// @Param party_id query int true "活动id"
// @Param action_type query int true "1:完成party 2:删除party(未开始的party取消)"
// @Param access-token header string true "access-token"
// @Param refresh-token header string false "refresh-token"
// @router /bocchi/party/status [GET]
func ChangePartyStatus(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.ChangePartyStatusRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.ChangePartyStatusResponse)

	v, _ := c.Get("current_user_id")
	id, _ := v.(int64)

	rpcResp, err := rpc.ChangePartyStatus(ctx, &party.ChangePartyStatusRequest{
		UserId:     id,
		PartyId:    req.PartyID,
		ActionType: req.ActionType,
	})
	if err != nil {
		pack.SendRPCFailResp(c, err)
		return
	}
	resp.Base = pack.ConvertToAPIBaseResp(rpcResp.Base)
	c.JSON(consts.StatusOK, resp)
}
