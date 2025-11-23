package routes

import (
	"kaiyuanshe/controllers"
	"kaiyuanshe/middlewares"

	"github.com/gin-gonic/gin"
)

func SetupRouter(r *gin.Engine) {
	r.Use(middlewares.Cors())

	r.POST("/v1/login-email", controllers.HandleLoginV2)
	r.POST("/v1/register-verify", controllers.HandleLoginV2)
	r.POST("/v1/login", controllers.HandleLogin)
	r.POST("/v1/register", controllers.HandleRegister)

	user := r.Group("v1/users")
	{
		user.PUT("/:id", middlewares.JWT(""), controllers.UpdateUser)
		user.GET("/:id", middlewares.JWT(""), controllers.GetUser)
	}

	event := r.Group("/v1/events")
	{
		event.POST("", middlewares.JWT("event:write"), controllers.CreateEvent)
		event.DELETE("/:id", middlewares.JWT("event:delete"), controllers.DeleteEvent)
		event.PUT("/:id", middlewares.JWT("event:write"), controllers.UpdateEvent)
		event.GET("", controllers.QueryEvents)
		event.GET("/:id", controllers.GetEvent)
		event.PUT("/:id/status", middlewares.JWT("event:review"), controllers.UpdateEventPublishStatus)
		event.POST("/:id/venues", middlewares.JWT("event:write"), controllers.CreateSession)
		event.GET("/:id/venues", controllers.GetSessionsByEvent)
		event.DELETE("/:id/venues/:venueId", middlewares.JWT("event:delete"), controllers.DeleteSession)

	}
	venue := r.Group("/v1/venues")
	{
		venue.POST("/:id/agendas", middlewares.JWT("event:write"), controllers.AddAgendaToSession)
		venue.DELETE("/agendas/:id", middlewares.JWT("event:delete"), controllers.DeleteAgenda)
	}

	community := r.Group("/v1/communities")
	{
		community.POST("", middlewares.JWT("event:write"), controllers.CreatCommunity)
		community.DELETE("/:id", middlewares.JWT("event:delete"), controllers.DeleteCommunity)
		community.PUT("/:id", middlewares.JWT("event:write"), controllers.UpdateCommunity)
		community.GET("", controllers.QueryCommunity)
		community.GET("/:id", controllers.GetCommunity)
	}

	member := r.Group("/v1/members")
	{
		member.POST("", middlewares.JWT("event:write"), controllers.CreatMember)
		member.GET("", controllers.QueryMembers)
		member.DELETE("/:id", middlewares.JWT("event:delete"), controllers.DeleteMember)
		member.PUT("/:id", middlewares.JWT("event:write"), controllers.UpdateMember)
	}

	blog := r.Group("/v1/articles")
	{
		blog.POST("", middlewares.JWT("event:write"), controllers.CreateArticle)
		blog.DELETE("/:id", middlewares.JWT("event:delete"), controllers.DeleteArticle)
		blog.PUT("/:id", middlewares.JWT("event:write"), controllers.UpdateArticle)
		blog.GET("/:id", controllers.GetArticle)
		blog.GET("", controllers.QueryArticles)
		blog.PUT("/:id/status", middlewares.JWT("event:review"), controllers.UpdateArticlePublishStatus)
	}
}
