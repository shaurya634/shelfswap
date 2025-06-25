from rest_framework import serializers
from .models import Book, SwapRequest, Message, CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email']

class BookSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Book
        fields = '__all__'

class SwapRequestSerializer(serializers.ModelSerializer):
    sender = UserSerializer(read_only=True)
    receiver = UserSerializer(read_only=True)
    requested_book = BookSerializer(read_only=True)
    offered_book = BookSerializer(read_only=True)

    class Meta:
        model = SwapRequest
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    sender = UserSerializer(read_only=True)

    class Meta:
        model = Message
        fields = '__all__'

