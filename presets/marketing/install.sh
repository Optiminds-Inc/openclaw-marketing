#!/bin/bash
# Install Marketing Skills Pack
# Usage: ./install.sh [target_directory]

TARGET=${1:-~/.openclaw/workspace/skills}

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📦 Marketing Skills Pack Installer"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if target exists
if [ ! -d "$TARGET" ]; then
    echo "Creating directory: $TARGET"
    mkdir -p "$TARGET"
fi

# Get script directory (where the zip is)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Copy skills
echo "Copying skills to: $TARGET"
cp -r "$SCRIPT_DIR/skills/"* "$TARGET/"

# Count skills
SKILL_COUNT=$(ls -1 "$SCRIPT_DIR/skills/" | wc -l | tr -d ' ')

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Installation Complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Installed $SKILL_COUNT skills:"
ls -1 "$SCRIPT_DIR/skills/"
echo ""
echo "SOUL.md (marketing agent identity) is in:"
echo "  $SCRIPT_DIR/SOUL.md"
echo ""
echo "To create a marketing-focused agent:"
echo "  1. cp $SCRIPT_DIR/SOUL.md [new-workspace]/"
echo "  2. cd [new-workspace]"
echo "  3. openclaw start"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
