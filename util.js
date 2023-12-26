var users = {};
var loggedIn = false;

        function register(form) {
            var email = form.email.value;
            var password = form.password.value;

            if(users[email]) {
                alert('Erro: Já existe um usuário com este email.');
            } else {
                users[email] = password;
                alert('Sucesso: Usuário cadastrado com sucesso.');
            }
        }

        function login(form) {
            var email = form.email.value;
            var password = form.password.value;
        
            if(users[email] !== password) {
                alert('Erro: Email ou senha incorretos.');
            } else {
                window.location.href = 'index.html';
                loggedIn = true;
                document.getElementById('accountLink').textContent = 'Minha Conta';
            }
        }

        document.getElementById('goToRegister').addEventListener('click', function() {
            document.getElementById('loginForm').classList.add('hide');
            document.getElementById('registerForm').classList.remove('hide');
        });
        document.getElementById('goToLogin').addEventListener('click', function() {
            document.getElementById('registerForm').classList.add('hide');
            document.getElementById('loginForm').classList.remove('hide');
        });