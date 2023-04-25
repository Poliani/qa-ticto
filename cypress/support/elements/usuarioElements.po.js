const usuarioElements = {

    inputNome: '[id="name"]',
    inputEmail: '[id="email"]',
    inputPassword: '[id="password"]',
    btnCadastrar: '[class="btn btn-primary mt-3"]',
    feedbackSucesso: '[class="alert alert-success"]',
    feedbackCamposObrigatorios: '[class="form-text text-danger"]',
    btnAcoes: 'table > tbody > tr:nth-last-child(1) > td:nth-last-child(1) > div > button',
    optionsAcoes: '[class="dropdown-menu"]',
    optionBtnEditar: '.dropdown-menu > a.dropdown-item:nth-child(1)',
    optionBtnExcluir: '.dropdown-menu > a.dropdown-item:nth-last-child(1)',

    btnConfirmarExclusao: '.modal-dialog > .modal-content > .modal-footer > .btn-danger',
    btnFecharModal: '[class="btn btn-secondary"]',
    feedbackRemovidoSucesso: '[class="alert alert-success"]',
    
    modalEditar: {
        nome: 'input[id^=e_name]',
        email: 'input[id^=e_email]',
        btnSalvar: '[class="btn btn-primary"]',
        feedbackNomeinvalido: '[class="form-text text-danger"]',
        
    }  ,  
   
   tableGrid: 'table > tbody > tr',



}
export default usuarioElements
