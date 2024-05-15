
from django.urls import path,include
from .views import LoginAPIView


urlpatterns = [
 path("login/",LoginAPIView.as_view()),
]
