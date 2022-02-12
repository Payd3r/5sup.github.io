var app = new Vue(
    {
        el: '#contenitore-vue',
        data: {
            contenitore: 'contenitore',
            titolo: 'titolo',
            input: 'input',
            preview: 'preview',
            bottone: 'bottone',
            link: 'link',
            bottoneDark: 'bottoneDark',
            nome: ' ',
            cognome: ' ',
            testoBottone: 'Salutami!',
            link: 'https://www.google.com/',
            visibile: false,
            modalita: 'dark'
        },
        methods: {
            saluto() {
                if (this.nome != ' ' && this.cognome != ' ') {
                    if (!this.visibile) {
                        alert('ciao' + this.nome + ' ' + this.cognome)
                        this.nome = ''
                        this.cognome = ''
                        this.visibile = true;
                        this.testoBottone = 'Reset'
                    } else {
                        this.visibile = false;
                        this.testoBottone = 'Salutami'
                    }
                } else
                    alert('compilare i campi')
            },
            attiva_Dark() {
                if (this.modalita == "light") {
                    this.modalita = "dark";
                }
                else {
                    this.modalita = "light";
                }
            }
        }
    }
);