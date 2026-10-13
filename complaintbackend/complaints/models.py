import uuid
from django.db import models
from django.contrib.auth.models import User


class Complaint(models.Model):

    CATEGORY_CHOICES = [
        ('Faculty', 'Faculty'),
        ('Hostel', 'Hostel'),
        ('Canteen', 'Canteen'),
        ('Ragging', 'Ragging'),
        ('Fees', 'Fees'),
        ('Transport', 'Transport'),
    ]

    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('In Progress', 'In Progress'),
        ('Resolved', 'Resolved'),
    ]

    # Complaint ID
    complaint_id = models.CharField(max_length=20, unique=True, editable=False)

    #  ALWAYS store user (important)
    student = models.ForeignKey(User, on_delete=models.CASCADE)

    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='Faculty')
    subject = models.CharField(max_length=200)
    description = models.TextField()

    #  Anonymous option (sirf display ke liye)
    is_anonymous = models.BooleanField(default=False)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')

    # Admin reply
    admin_reply = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        # Generate complaint ID
        if not self.complaint_id:
            self.complaint_id = "CMP" + str(uuid.uuid4().hex[:6]).upper()

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.complaint_id} - {self.category} ({self.status})"