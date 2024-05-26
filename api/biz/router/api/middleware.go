// Code generated by hertz generator.

package api

import (
	"bocchi/api/biz/mw/jwt"
	"github.com/cloudwego/hertz/pkg/app"
)

func rootMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _bibiMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _access_tokenMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _getaccesstokenMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtRefreshMiddleware.MiddlewareFunc(),
	}
}

func _userMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _infoMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _switch2faMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}

func _avatarMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _avatar0Mw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}

func _loginMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _login0Mw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.LoginHandler,
	}
}

func _registerMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _register0Mw() []app.HandlerFunc {
	return nil
}

func _signatureMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}

func _bocchiMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _partyMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _createpartyMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}

func _getpartymembersMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _searchpartyMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _applyMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _joinpartyMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}

func _applylistMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}

func _permitjoinMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}

func _itineraryMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _createitineraryMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}

func _mergeitineraryMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}

func _showpartyitineraryMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _sequenceMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _changesequenceMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}

func _poiMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _commentMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _commentcreateMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}

func _commentdeleteMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}

func _commentlistMw() []app.HandlerFunc {
	// your code...
	return nil
}

func _verifyaccesstokenMw() []app.HandlerFunc {
	return []app.HandlerFunc{
		jwt.JwtMiddleware.MiddlewareFunc(),
	}
}
