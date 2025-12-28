#!/bin/bash

# Скрипт инициализации Git репозитория для проекта Альбион-1
# Использование: ./init-git.sh

echo "🚀 Инициализация Git репозитория для Альбион-1"
echo "=============================================="

# Проверка наличия git
if ! command -v git &> /dev/null; then
    echo "❌ Git не установлен. Пожалуйста, установите Git first."
    exit 1
fi

# Инициализация git репозитория
echo "📂 Инициализация Git репозитория..."
git init

# Добавление всех файлов
echo "📋 Добавление файлов..."
git add .

# Первый коммит
echo "💾 Создание первого коммита..."
git commit -m "🎉 Initial commit: professional Bitrix24 integration company website

- Modern React 19 + TypeScript + TailwindCSS 4 stack
- GitHub Actions CI/CD configured
- Fully responsive design with OKLCH color palette
- Optimized for GitHub Pages deployment
- Professional corporate website for Bitrix24 integration services
"

# Создание и переключение на main ветку
echo "🌿 Создание main ветки..."
git branch -M main

# Добавление remote (замените на ваш репозиторий)
echo "🔗 Добавьте remote repository:"
echo "git remote add origin https://github.com/YOUR_USERNAME/albion1-website.git"
echo ""
echo "Затем выполните:"
echo "git push -u origin main"
echo ""

echo "✅ Git репозиторий успешно инициализирован!"
echo ""
echo "📖 Следующие шаги:"
echo "1. Создайте репозиторий на GitHub"
echo "2. Добавьте remote (см. инструкцию выше)"
echo "3. Сделайте push"
echo "4. GitHub Actions автоматически задеплоит сайт!"
echo ""
echo "🌐 Сайт будет доступен по адресу:"
echo "https://YOUR_USERNAME.github.io/albion1-website/"
echo ""
echo "📚 Дополнительная информация в файлах:"
echo "- DEPLOYMENT.md - инструкции по деплою"
echo "- PUBLISH_CHECKLIST.md - чек-лист публикации"
echo "- CONTRIBUTING.md - как участвовать в проекте"