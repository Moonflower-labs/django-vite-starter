from django.urls import include, path
from .views import ItemsView
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('items/', ItemsView.as_view(), name='items'),
    # path('users/', UserView.as_view(), name='users'),
]
