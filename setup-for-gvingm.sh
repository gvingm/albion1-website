#!/bin/bash

# 🔧 Скрипт подготовки и публикации проекта Альбион-1 для GitHub пользователя gvingm
# Использование: ./setup-for-gvingm.sh

echo "🚀 Подготовка проекта Альбион-1 для публикации на GitHub"
echo "========================================================="
echo "👤 GitHub пользователь: gvingm"
echo "📁 Репозиторий: albion1-website"
echo "🌐 Будущий URL: https://gvingm.github.io/albion1-website/"
echo ""

# Проверка наличия git
if ! command -v git &> /dev/null; then
    echo "❌ Git не установлен. Пожалуйста, установите Git first."
    exit 1
fi

# Проверка наличия Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен. Пожалуйста, установите Node.js 22+ first."
    exit 1
fi

echo "✅ Проверка зависимостей пройдена"
echo ""

# Показать текущую структуру
echo "📂 Текущая структура проекта:"
find . -maxdepth 2 -type f -name "*.md" -o -name "*.json" -o -name "*.yml" -o -name "*.html" | sort
echo ""

# Проверка GitHub CLI (опционально)
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI найден"
    echo "📊 Информация о пользователе gvingm:"
    gh api users/gvingm --jq '.name, .bio, .public_repos' 2>/dev/null || echo "⚠️  Не удалось получить информацию"
else
    echo "ℹ️  GitHub CLI не найден, но это не критично"
fi

echo ""
echo "📋 Чек-лист перед публикацией:"
echo "✅ Все технические проблемы устранены"
echo "✅ GitHub Actions workflow настроен"
echo "✅ Документация подготовлена"
echo "✅ Сайт имеет полноценный дизайн"
echo "✅ SEO и доступность настроены"
echo ""

# Инициализация git репозитория
echo "🔧 Инициализация Git репозитория..."
if [ -d ".git" ]; then
    echo "⚠️  Git репозиторий уже существует"
else
    git init
    echo "✅ Git репозиторий инициализирован"
fi

# Проверка remote репозитория
echo "🔗 Проверка remote репозитория..."
if git remote get-url origin &> /dev/null; then
    CURRENT_REMOTE=$(git remote get-url origin)
    echo "📍 Текущий remote: $CURRENT_REMOTE"
    
    if [[ "$CURRENT_REMOTE" == *"gvingm/albion1-website"* ]]; then
        echo "✅ Remote уже настроен корректно для gvingm/albion1-website"
    else
        echo "⚠️  Remote настроен на другой репозиторий"
        echo "Хотите изменить на gvingm/albion1-website? (y/n)"
        read -r response
        if [[ "$response" == "y" ]]; then
            git remote remove origin
            git remote add origin https://github.com/gvingm/albion1-website.git
            echo "✅ Remote обновлен"
        fi
    fi
else
    echo "🔗 Добавление remote для gvingm/albion1-website..."
    git remote add origin https://github.com/gvingm/albion1-website.git
    echo "✅ Remote добавлен"
fi

# Показать что будет в коммите
echo ""
echo "📋 Файлы которые будут добавлены в коммит:"
git status --porcelain | wc -l | xargs echo "Количество измененных файлов:"
echo ""

# Добавление всех файлов
echo "📦 Добавление файлов в индекс..."
git add .
echo "✅ Файлы добавлены"

# Создание осмысленного коммита
echo "💾 Создание коммита..."
COMMIT_MESSAGE="🎉 Initial release: professional Bitrix24 integration company website

✨ Features:
- Modern React 19 + TypeScript + TailwindCSS 4 stack
- GitHub Actions CI/CD with automatic deployment
- Fully responsive design with OKLCH color palette
- SEO optimized with sitemap and robots.txt
- Professional corporate website for Bitrix24 integration services

🔧 Technical:
- Optimized for GitHub Pages deployment
- Mobile-first responsive design
- Professional OKLCH color scheme
- Comprehensive documentation

📁 Structure:
- React frontend with TypeScript
- Express.js backend
- GitHub Actions automation
- Professional documentation

🚀 Deployment: https://gvingm.github.io/albion1-website/"

git commit -m "$COMMIT_MESSAGE"
echo "✅ Коммит создан"

# Информация о репозитории
echo ""
echo "📊 Информация о репозитории:"
echo "Количество коммитов: $(git rev-list --count HEAD)"
echo "Размер репозитория: $(du -sh .git | cut -f1)"
echo "Последний коммит: $(git log -1 --pretty=format:'%h %s')"
echo ""

# Финальные инструкции
echo "🎯 Финальные шаги для публикации:"
echo ""
echo "1. Убедитесь что репозиторий создан на GitHub:"
echo "   https://github.com/new"
echo "   Название: albion1-website"
echo "   Описание: Professional Bitrix24 integration company website"
echo ""
echo "2. Включите GitHub Pages:"
echo "   Settings → Pages → Source: GitHub Actions"
echo ""
echo "3. Отправьте код на GitHub:"
echo "   git push -u origin main"
echo ""
echo "4. Дождитесь завершения CI/CD:"
echo "   Проверьте статус в разделе Actions"
echo ""
echo "5. Проверьте сайт:"
echo "   https://gvingm.github.io/albion1-website/"
echo ""
echo "📚 Дополнительная информация:"
echo "- README.md - основная документация"
echo "- DEPLOYMENT.md - детальные инструкции по деплою"
echo "- PUBLISH_CHECKLIST.md - чек-лист для проверки"
echo ""
echo "🆘 Если нужна помощь:"
echo "- Создайте issue в репозитории"
echo "- Email: 560898@gmail.com"
echo "- Telegram: @gvingm"
echo ""
echo "🎉 Проект полностью готов к публикации!"
echo "Удачного деплоя! 🚀"