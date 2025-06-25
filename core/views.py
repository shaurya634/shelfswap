from rest_framework import viewsets, permissions
from .models import Book, SwapRequest, Message
from .serializers import BookSerializer, SwapRequestSerializer, MessageSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class SwapRequestViewSet(viewsets.ModelViewSet):
    queryset = SwapRequest.objects.all().order_by('-created_at')
    serializer_class = SwapRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all().order_by('-timestamp')
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)

