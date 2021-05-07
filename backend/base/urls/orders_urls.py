from django.urls import path,include
from base.views import orders_views

urlpatterns = [
    path('',orders_views.index, name="user/"),
]