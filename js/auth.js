// Simulação de Banco de Dados com LocalStorage
const DB = {
    getUsers: () => JSON.parse(localStorage.getItem('vetconnect_users')) || [],
    saveUser: (user) => {
        const users = DB.getUsers();
        users.push(user);
        localStorage.setItem('vetconnect_users', JSON.stringify(users));
    },
    getCurrentUser: () => JSON.parse(sessionStorage.getItem('vetconnect_session')),
    setCurrentUser: (user) => sessionStorage.setItem('vetconnect_session', JSON.stringify(user)),
    logout: () => {
        sessionStorage.removeItem('vetconnect_session');
        window.location.href = 'login.html';
    }
};

// Função de Cadastro
function register(name, email, password, type) {
    const users = DB.getUsers();
    if (users.find(u => u.email === email)) {
        alert('Este e-mail já está cadastrado!');
        return false;
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        type, // 'tutor' ou 'vet'
        createdAt: new Date().toISOString()
    };

    DB.saveUser(newUser);
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
    return true;
}

// Função de Login
function login(email, password) {
    const users = DB.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        DB.setCurrentUser(user);
        if (user.type === 'tutor') {
            window.location.href = 'dashboard-tutor.html';
        } else {
            window.location.href = 'dashboard-vet.html';
        }
        return true;
    } else {
        alert('E-mail ou senha incorretos!');
        return false;
    }
}

// Verificar se está logado
function checkAuth() {
    const user = DB.getCurrentUser();
    if (!user) {
        window.location.href = 'login.html';
    }
    return user;
}
