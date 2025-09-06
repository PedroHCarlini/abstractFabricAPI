export class User {
  private id: string;
  private name: string;
  private lastName: string;
  private email: string;
  private password: string;
  private createdAt: string;
  private updatedAt: string;

  constructor(data: {
    id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  }) {
    this.id = data.id;
    this.name = data.name;
    this.lastName = data.lastName;
    this.email = data.email;
    this.password = data.password;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: string): void {
    this.createdAt = createdAt;
  }

  public getUpdatedAt(): string {
    return this.updatedAt;
  }

  public setUpdatedAt(updatedAt: string): void {
    this.updatedAt = updatedAt;
  }
}
