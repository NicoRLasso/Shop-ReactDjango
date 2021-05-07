from django.urls import path,include
from base.views import users_views

urlpatterns = [
    path('',users_views.getUsers, name="user/"),
    path('login/',users_views.MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('register/',users_views.registerUser, name="register"),
    path('profile/',users_views.getUserProfile, name="user-profile"),
]