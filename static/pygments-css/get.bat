@echo off
:start
echo 请输入Pygments样式名称（输入 'exit' 退出）：
set /p stylename=

if "%stylename%"=="exit" goto end

pygmentize -S %stylename% -f html > %stylename%.css

if %errorlevel% equ 0 (
    echo CSS文件 %stylename%.css 创建成功！
) else (
    echo 创建CSS文件时发生错误。
)

goto start

:end
echo 程序已退出。
pause
