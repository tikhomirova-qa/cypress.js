describe('Тестирование формы авторизации', function () {
   it('Проверка на негативный кейс авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.contains('Вход');
        cy.get('.auth-form > form > [type="email"]').type('el.tikhomirova94@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Tizd956iv4ZQD2');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})
