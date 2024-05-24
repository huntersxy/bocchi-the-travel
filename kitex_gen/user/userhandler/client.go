// Code generated by Kitex v0.9.1. DO NOT EDIT.

package userhandler

import (
	user "bocchi/kitex_gen/user"
	"context"
	client "github.com/cloudwego/kitex/client"
	callopt "github.com/cloudwego/kitex/client/callopt"
)

// Client is designed to provide IDL-compatible methods with call-option parameter for kitex framework.
type Client interface {
	Register(ctx context.Context, req *user.RegisterRequest, callOptions ...callopt.Option) (r *user.RegisterResponse, err error)
	Login(ctx context.Context, req *user.LoginRequest, callOptions ...callopt.Option) (r *user.LoginResponse, err error)
	Info(ctx context.Context, req *user.InfoRequest, callOptions ...callopt.Option) (r *user.InfoResponse, err error)
	Avatar(ctx context.Context, req *user.AvatarRequest, callOptions ...callopt.Option) (r *user.AvatarResponse, err error)
	Switch2FA(ctx context.Context, req *user.Switch2FARequest, callOptions ...callopt.Option) (r *user.Switch2FAResponse, err error)
	Signature(ctx context.Context, req *user.SignatureRequest, callOptions ...callopt.Option) (r *user.SignatureResponse, err error)
	GetUserList(ctx context.Context, req *user.GetUsersRequest, callOptions ...callopt.Option) (r *user.GetUsersResponse, err error)
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
	return &kUserHandlerClient{
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

type kUserHandlerClient struct {
	*kClient
}

func (p *kUserHandlerClient) Register(ctx context.Context, req *user.RegisterRequest, callOptions ...callopt.Option) (r *user.RegisterResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.Register(ctx, req)
}

func (p *kUserHandlerClient) Login(ctx context.Context, req *user.LoginRequest, callOptions ...callopt.Option) (r *user.LoginResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.Login(ctx, req)
}

func (p *kUserHandlerClient) Info(ctx context.Context, req *user.InfoRequest, callOptions ...callopt.Option) (r *user.InfoResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.Info(ctx, req)
}

func (p *kUserHandlerClient) Avatar(ctx context.Context, req *user.AvatarRequest, callOptions ...callopt.Option) (r *user.AvatarResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.Avatar(ctx, req)
}

func (p *kUserHandlerClient) Switch2FA(ctx context.Context, req *user.Switch2FARequest, callOptions ...callopt.Option) (r *user.Switch2FAResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.Switch2FA(ctx, req)
}

func (p *kUserHandlerClient) Signature(ctx context.Context, req *user.SignatureRequest, callOptions ...callopt.Option) (r *user.SignatureResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.Signature(ctx, req)
}

func (p *kUserHandlerClient) GetUserList(ctx context.Context, req *user.GetUsersRequest, callOptions ...callopt.Option) (r *user.GetUsersResponse, err error) {
	ctx = client.NewCtxWithCallOptions(ctx, callOptions)
	return p.kClient.GetUserList(ctx, req)
}
