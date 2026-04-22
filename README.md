# VetConnect 🐾

O **VetConnect** é uma plataforma web moderna desenvolvida para intermediar a comunicação e o acompanhamento da saúde de animais de estimação entre veterinários e tutores.

## 🚀 Funcionalidades

### Para Tutores (Donos de Pets)
- **Cadastro de Pets:** Registre seus animais com nome, espécie, raça, idade e peso.
- **Dashboard Intuitivo:** Visualize um resumo dos seus pets e status de saúde.
- **Histórico de Saúde:** Timeline completa com consultas e observações médicas.
- **Chat em Tempo Real:** Comunique-se diretamente com o veterinário.

### Para Veterinários
- **Gestão de Pacientes:** Lista completa de todos os pets atendidos.
- **Registros Médicos:** Adicione consultas, vacinas e recomendações.
- **Comunicação Direta:** Chat com os tutores para acompanhamento pós-consulta.

## 🛠️ Tecnologias Utilizadas
- **Frontend:** HTML5, CSS3 (Variáveis, Flexbox, Grid) e JavaScript Vanilla.
- **Ícones:** Font Awesome 6.
- **Armazenamento:** LocalStorage (simulando um banco de dados persistente no navegador).
- **Autenticação:** SessionStorage para controle de sessão ativa.

## 📂 Estrutura do Projeto
```text
/vetconnect
├── css/
│   └── style.css          # Estilos globais e tema verde
├── js/
│   ├── auth.js            # Lógica de login e cadastro
│   └── data.js            # Gerenciamento de dados (Pets, Consultas, Mensagens)
├── index.html             # Landing Page
├── login.html             # Página de Login
├── register.html          # Página de Cadastro
├── dashboard-tutor.html   # Painel do Dono do Pet
├── dashboard-vet.html     # Painel do Veterinário
├── chat.html              # Sistema de Mensagens
└── pet-history.html       # Timeline de saúde do animal
```

## ⚙️ Como Executar
1. Clone ou baixe os arquivos.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Cadastre-se como **Tutor** ou **Veterinário** para explorar as funcionalidades.

---
Desenvolvido com foco em escalabilidade e experiência do usuário.
