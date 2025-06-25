from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, SwapRequestViewSet, MessageViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet, basename='book')  # ✅ fixed
router.register(r'swaps', SwapRequestViewSet)
router.register(r'messages', MessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

