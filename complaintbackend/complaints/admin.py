from django.contrib import admin
from .models import Complaint

@admin.register(Complaint)
class ComplaintAdmin(admin.ModelAdmin):

    # Columns in admin list
    list_display = (
        'complaint_id',
        'category',
        'student_name',
        'status',
        'is_anonymous',
        'created_at'
    )

    # Filters
    list_filter = ('status', 'category', 'is_anonymous', 'created_at')

    # Search
    search_fields = ('complaint_id', 'subject', 'description')

    # Editable fields in list view
    list_editable = ('status',)

    # Read-only fields
    readonly_fields = ('complaint_id', 'created_at', 'updated_at')

    # Default ordering (latest first)
    ordering = ('-created_at',)

    # Group fields nicely
    fieldsets = (
        ("Complaint Info", {
            'fields': ('complaint_id', 'category', 'subject', 'description')
        }),
        ("User Info", {
            'fields': ('student', 'is_anonymous')
        }),
        ("Status & Response", {
            'fields': ('status', 'admin_reply')
        }),
        ("Timestamps", {
            'fields': ('created_at', 'updated_at')
        }),
    )

    # Custom column for student name
    def student_name(self, obj):
        if obj.is_anonymous or not obj.student:
            return "Anonymous"
        return obj.student.username
    student_name.short_description = "Student"