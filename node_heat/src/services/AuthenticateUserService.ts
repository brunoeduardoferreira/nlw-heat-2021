/*
 * Receber o code(string)
 * Recuperar o access_token no github
 * Verificar se o usuário existe no BD
 * Se ele existir  = gera um token 
 * Se não existir  = cria no banco e gera um token
 * Retorna o token com as infos do usuario logado
*/

class AuthenticateUserService {
  async execute(code: string) {

  }
}

export { AuthenticateUserService }