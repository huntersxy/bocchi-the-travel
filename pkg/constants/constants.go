package constants

import "time"

const (
	// service name
	APIServiceName         = "api"
	UserServiceName        = "user"
	PartyServiceName       = "party"
	ItineraryServiceName   = "itinerary"
	InteractionServiceName = "interaction"

	// db table name
	UserTableName      = "user"
	PartyTableName     = "party"
	MemberTableName    = "member"
	ItineraryTableName = "itinerary"
	CommentTableName   = "comment"

	// limit
	MaxConnections     = 1000
	MaxQPS             = 100
	MaxRequestBodySize = 114514 * 1024 * 1024
	MaxIdleConns       = 20
	MaxGoroutines      = 10
	MaxOpenConns       = 100
	ConnMaxLifetime    = 10 * time.Second

	// RPC
	MuxConnection  = 1
	RPCTimeout     = 3 * time.Second
	ConnectTimeout = 50 * time.Millisecond

	//es
	ElasticSearchIndexName = "bocchi"
)

const (
	// page
	PageNum  = 1
	PageSize = 10

	//redis
	CommentSuffix = ":comment"

	PoiExpTime     = time.Hour * 1 //到期自动移除k-v
	CommentExpTime = time.Minute * 10

	PoiCommentCountZset = "poi_comment_counts"
)
