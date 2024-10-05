from todoApp.models import Notes
from rest_framework import serializers

class NotesSerializer(serializers.ModelSerializer):
    """
    Serializer for notes
    """
    class Meta:
        model = Notes
        fields = ["note_id", "note_title", "note_body", "user"]
