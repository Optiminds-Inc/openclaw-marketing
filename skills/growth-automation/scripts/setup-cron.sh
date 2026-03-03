#!/bin/bash
# Setup cron job for daily growth automation
# Usage: ./setup-cron.sh [hour] [minute]
# Example: ./setup-cron.sh 9 0  (runs at 9:00 AM)

HOUR=${1:-9}
MINUTE=${2:-0}

# Create cron entry
CRON_ENTRY="$MINUTE $HOUR * * * openclaw heartbeat --message 'Run daily growth automation'"

# Check if cron already exists
if crontab -l 2>/dev/null | grep -q "Run daily growth automation"; then
    echo "⚠️  Cron job already exists. To update, remove it first:"
    echo "   crontab -e"
    echo ""
    echo "Then add this line:"
    echo "   $CRON_ENTRY"
else
    # Add to crontab
    (crontab -l 2>/dev/null; echo "$CRON_ENTRY") | crontab -
    echo "✅ Cron job created!"
    echo ""
    echo "Schedule: Daily at $HOUR:$(printf '%02d' $MINUTE)"
    echo "Command: $CRON_ENTRY"
    echo ""
    echo "To verify: crontab -l"
    echo "To remove: crontab -e"
fi
