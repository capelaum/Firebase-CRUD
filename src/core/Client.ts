export class Client {
  #id: string | null
  #name: string
  #email: string

  constructor(name: string, email: string, id: string | null = null) {
    this.#id = id
    this.#name = name
    this.#email = email
  }

  static empty() {
    return new Client('', '')
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get email() {
    return this.#email
  }
}
