@echo off
:start
echo ������Pygments��ʽ���ƣ����� 'exit' �˳�����
set /p stylename=

if "%stylename%"=="exit" goto end

pygmentize -S %stylename% -f html > %stylename%.css

if %errorlevel% equ 0 (
    echo CSS�ļ� %stylename%.css �����ɹ���
) else (
    echo ����CSS�ļ�ʱ��������
)

goto start

:end
echo �������˳���
pause
