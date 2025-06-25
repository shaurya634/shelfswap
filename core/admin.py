from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = UserAdmin.fieldsets + (
        ('Additional Info', {'fields': ('location', 'bio')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)

from .models import Book

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'genre', 'owner', 'created_at')
    search_fields = ('title', 'author', 'genre')
    list_filter = ('genre', 'owner')

from .models import SwapRequest

@admin.register(SwapRequest)
class SwapRequestAdmin(admin.ModelAdmin):
    list_display = ('sender', 'receiver', 'requested_book', 'offered_book', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('sender__username', 'receiver__username', 'requested_book__title', 'offered_book__title')

from .models import Message

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('sender', 'swap_request', 'timestamp')
    search_fields = ('sender__username', 'content')

