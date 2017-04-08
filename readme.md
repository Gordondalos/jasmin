### DD - Разработка, основанная на функционировании ( поведениеи), 
правильным подходом является
1. Написание коментария к тому что должна сделать функция
2. Написание теста который проверит будет ли функция возвращать нам нужное
3. Нависание функции проходящей тест

для автоматизации удобно использовать gem
 
    sudo gem install jasmine

потом в проекте пишем 

    jasmine init
    
это инициализирует жасмин и все установит что нужно

потом вводим команду
    
    rake jasmine
    
чтобы поставить примеры
 
    jasmine examples
    
    
Применение rake jasmine из jasmin gem имеет одно большое преемущество
не нужно делать файл speсRunner.html, он генерится гемом
самостоятельно автоматом, потом в файле настроек
можно указать где смотреть на файле с тестами,
это все делается тут

    spec/javascripts/support/jasmine.yml
   
в нем указано где лежат файлы для тестирования
и где лежат сами тесты


тестирование дом дерева
для этого используется jasmine-jquery

    https://github.com/velesin/jasmine-jquery.git

эта библиотека содержит мого матчеров и позволяет
писать матчеры в стиле jquery

например
    expect($('<input type="checkbox" checked="checked"/>')).toBeChecked()
    expect('<input type="submit" disabled="disabled"/>').toBeDisabled()
    expect($('<input type="text" />').focus()).toBeFocused()
    expect($('<div><span class="some-class"></span></div>')).toContain('some-class')
    
 масса примеров написана в самом ридми библиотеки
 
 для использования этого плагина положим
 jasmine-jquery.js в папку spec/javascripts/helpers
 тудаже положим сам jquery, все нужные библиотеки подтянул bower



SPICE методы замены части кода обьекта за которым мы следим


 
 
