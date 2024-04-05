// Code generated by hertz generator.

package api

import (
	"context"

	api "bocchi/api/biz/model/api"
	"github.com/cloudwego/hertz/pkg/app"
	"github.com/cloudwego/hertz/pkg/protocol/consts"
)

// CreateParty .
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

	c.JSON(consts.StatusOK, resp)
}

// JoinParty .
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

	c.JSON(consts.StatusOK, resp)
}

// ApplyList .
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

	c.JSON(consts.StatusOK, resp)
}

// PermitJoin .
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

	c.JSON(consts.StatusOK, resp)
}

// GetPartyMembers .
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

	c.JSON(consts.StatusOK, resp)
}

// SearchParty .
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

	c.JSON(consts.StatusOK, resp)
}
