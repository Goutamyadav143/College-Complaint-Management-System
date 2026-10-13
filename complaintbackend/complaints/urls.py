from django.urls import path
from .views import create_complaint, register, login, get_complaints , complaint_stats
from . import views

urlpatterns = [
    path('register/', register),
    path('login/', login),
    path('complaints/', create_complaint),
    path('my-complaints/', get_complaints),
    path('stats/', views.complaint_stats), 
]
