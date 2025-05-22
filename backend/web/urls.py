from django.urls import re_path


from .views import ServeReactAppView


urlpatterns = [

    re_path(r'^(?!(api|static|api-auth|assets)/).*',
            ServeReactAppView.as_view()),
]
