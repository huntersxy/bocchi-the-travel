// Code generated by hertz generator.

package api

import (
	"bocchi/api/biz/rpc"
	"bocchi/kitex_gen/itinerary"
	"bocchi/pkg/errno"
	"bocchi/pkg/pack"
	"context"
	"fmt"

	api "bocchi/api/biz/model/api"
	"github.com/cloudwego/hertz/pkg/app"
	"github.com/cloudwego/hertz/pkg/protocol/consts"
)

// CreateItinerary .
// @Summary create_itinerary
// @Description create itinerary for party
// @Accept json/form
// @Produce json
// @Param title query string true "标题"
// @Param action_type query int true "类型 1:route;2:activity;3:accommodation;4:eat;5:other"
// @Param party_id query int true "活动id"
// @Param rectangle query string false "坐标 1时不需要"
// @Param route_json query string false "路线 1时需要"
// @Param remark query string false "备注"
// @Param schedule_start_time query string true "计划起始时间(例:2006-01-02 15:40)"
// @Param schedule_end_time query string true "计划结束时间(例:2006-01-02 16:40)"
// @Param access-token header string true "access-token"
// @Param refresh-token header string false "refresh-token"
// @router /bocchi/party/itinerary/create [POST]
func CreateItinerary(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.CreateItineraryRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.CreateItineraryResponse)

	v, _ := c.Get("current_user_id")
	id, _ := v.(int64)

	if (req.ActionType == 1 && req.Rectangle != nil) || (req.ActionType != 1 && req.Rectangle == nil) {
		resp.Base = pack.ConvertToAPIBaseResp(pack.BuildBaseResp(errno.ParamError))
		c.JSON(consts.StatusOK, resp)
		return
	}

	rpcResp, err := rpc.ItineraryCreate(ctx, &itinerary.CreateItineraryRequest{
		FounderId:         id,
		Title:             req.Title,
		ActionType:        req.ActionType,
		Rectangle:         req.Rectangle,
		RouteJson:         req.RouteJSON,
		Remark:            req.Remark,
		ScheduleStartTime: req.ScheduleStartTime,
		ScheduleEndTime:   req.ScheduleEndTime,
		PartyId:           req.PartyID,
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
	resp.Itinerary = pack.ConvertToAPIItinerary(rpcResp.Itinerary)
	c.JSON(consts.StatusOK, resp)
}

// ShowPartyItinerary .
// @Summary show_party_itinerary
// @Description show party's itineraries order by sequence
// @Accept json/form
// @Produce json
// @Param party_id query int true "活动id"
// @router /bocchi/party/itinerary/show [GET]
func ShowPartyItinerary(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.ShowPartyItineraryRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.ShowPartyItineraryResponse)

	rpcResp, err := rpc.ItineraryShow(ctx, &itinerary.ShowPartyItineraryRequest{
		PartyId: req.PartyID,
	})
	if err != nil {
		pack.SendRPCFailResp(c, err)
		return
	}
	resp.Base = pack.ConvertToAPIBaseResp(rpcResp.Base)
	resp.Itineraries = pack.ConvertToAPIItineraries(rpcResp.Itineraries)
	c.JSON(consts.StatusOK, resp)
}

// ChangeSequence .
// @Summary change_itinerary_sequence
// @Description show party's itineraries order by sequence
// @Accept json/form
// @Produce json
// @Param itinerary_id_list query array true "行程id列表"
// @Param sequence_list query array true "对应行程的顺序列表"
// @Param access-token header string true "access-token"
// @Param refresh-token header string false "refresh-token"
// @router /bocchi/party/itinerary/sequence/change [POST]
func ChangeSequence(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.ChangeSequenceRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.ChangeSequenceResponse)

	v, _ := c.Get("current_user_id")
	id, _ := v.(int64)

	fmt.Println(req)
	rpcResp, err := rpc.ItinerarySequenceChange(ctx, &itinerary.ChangeSequenceRequest{
		ItineraryIdList: req.ItineraryIDList,
		SequenceList:    req.SequenceList,
		UserId:          id,
	})
	if err != nil {
		pack.SendRPCFailResp(c, err)
		return
	}
	resp.Base = pack.ConvertToAPIBaseResp(rpcResp.Base)
	c.JSON(consts.StatusOK, resp)
}

// MergeItinerary .
// @Summary merge_itinerary
// @Description merge itinerary into party
// @Accept json/form
// @Produce json
// @Param itinerary_id query int true "行程id"
// @Param party_id query int true "活动id"
// @Param access-token header string true "access-token"
// @Param refresh-token header string false "refresh-token"
// @router /bocchi/party/itinerary/merge [GET]
func MergeItinerary(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.MergeItineraryRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.MergeItineraryResponse)

	v, _ := c.Get("current_user_id")
	id, _ := v.(int64)

	rpcResp, err := rpc.ItineraryMerge(ctx, &itinerary.MergeItineraryRequest{
		PartyId:     req.PartyID,
		ItineraryId: req.ItineraryID,
		UserId:      id,
	})
	if err != nil {
		pack.SendRPCFailResp(c, err)
		return
	}
	resp.Base = pack.ConvertToAPIBaseResp(rpcResp.Base)

	c.JSON(consts.StatusOK, resp)
}

// GetItineraryInfo .
// @Summary get_itinerary
// @Description get itinerary by id
// @Accept json/form
// @Produce json
// @Param itinerary_id query int true "id"
// @router /bocchi/party/itinerary/info [GET]
func GetItineraryInfo(ctx context.Context, c *app.RequestContext) {
	var err error
	var req api.GetItineraryInfoRequest
	err = c.BindAndValidate(&req)
	if err != nil {
		c.String(consts.StatusBadRequest, err.Error())
		return
	}

	resp := new(api.GetItineraryInfoResponse)

	rpcResp, err := rpc.GetItineraryInfo(ctx, &itinerary.GetItineraryInfoRequest{
		ItineraryId: req.ItineraryID,
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
	resp.Itinerary = pack.ConvertToAPIItinerary(rpcResp.Itinerary)
	c.JSON(consts.StatusOK, resp)
}
