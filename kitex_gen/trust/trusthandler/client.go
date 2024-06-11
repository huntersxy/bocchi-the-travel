// Code generated by Kitex v0.9.1. DO NOT EDIT.

package trusthandler

import (
	trust "bocchi/kitex_gen/trust"
	"context"
	client "github.com/cloudwego/kitex/client"
	callopt "github.com/cloudwego/kitex/client/callopt"
)

// Client is designed to provide IDL-compatible methods with call-option parameter for kitex framework.
type Client interface {
	IsTrust(ctx context.Context, req *trust.IsTrustRequest, callOptions ...callopt.Option) (r *trust.IsTrustResponse, err error)
	TrustAction(ctx context.Context, req *trust.FollowActionRequest, callOptions ...callopt.Option) (r *trust.FollowActionResponse, err error)
	FollowerList(ctx context.Context, req *trust.FollowerListRequest, callOptions ...callopt.Option) (r *trust.FollowerListResponse, err error)
	FollowingList(ctx context.Context, req *trust.FollowingListRequest, callOptions ...callopt.Option) (r *trust.FollowingListResponse, err error)
	MarkToOther(ctx context.Context, req *trust.MarkToOtherRequest, callOptions ...callopt.Option) (r *trust.MarkToOtherResponse, err error)
	TrustEachList(ctx context.Context, req *trust.FriendListRequest, callOptions ...callopt.Option) (r *trust.FriendListResponse, err error)
	GetUserScore(ctx context.Context, req *trust.GetUserScoreRequest, callOptions ...callopt.Option) (r *trust.GetUserScoreResponse, err error)
}

// NewClient creates a client for the service defined in IDL.
func NewClient(destService string, opts ...client.Option) (Client, error) {
	var options []client.Option
	options = append(options, client.WithDestService(destService))

	options = append(options, opts...)

	kc, err := client.NewClient(serviceInfoForClient(), options...)
	if err != nil {
		return nil, err
	}
	return &kTrustHandlerClient{
		kClient: newServiceClient(kc),
	}, nil
}

// MustNewClient creates a client for the service defined in IDL. It panics if any error occurs.
func MustNewClient(destService string, opts ...client.Option) Client {
	kc, err := NewClient(destService, opts...)
	if err != nil {
		panic(err)
	}
	return kc
}

type kTrustHandlerClient struct {
	*kClient
}

func (p *kTrustHandlerClient) IsTrust(ctx context.Context, req *trust.IsTrustRequest, callOptions ...callopt.Option) (r *trust.IsTrustResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.IsTrust(ctx, req)
}

func (p *kTrustHandlerClient) TrustAction(ctx context.Context, req *trust.FollowActionRequest, callOptions ...callopt.Option) (r *trust.FollowActionResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.TrustAction(ctx, req)
}

func (p *kTrustHandlerClient) FollowerList(ctx context.Context, req *trust.FollowerListRequest, callOptions ...callopt.Option) (r *trust.FollowerListResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.FollowerList(ctx, req)
}

func (p *kTrustHandlerClient) FollowingList(ctx context.Context, req *trust.FollowingListRequest, callOptions ...callopt.Option) (r *trust.FollowingListResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.FollowingList(ctx, req)
}

func (p *kTrustHandlerClient) MarkToOther(ctx context.Context, req *trust.MarkToOtherRequest, callOptions ...callopt.Option) (r *trust.MarkToOtherResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.MarkToOther(ctx, req)
}

func (p *kTrustHandlerClient) TrustEachList(ctx context.Context, req *trust.FriendListRequest, callOptions ...callopt.Option) (r *trust.FriendListResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.TrustEachList(ctx, req)
}

func (p *kTrustHandlerClient) GetUserScore(ctx context.Context, req *trust.GetUserScoreRequest, callOptions ...callopt.Option) (r *trust.GetUserScoreResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.GetUserScore(ctx, req)
}
