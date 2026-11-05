# 1. Estágio de Compilação (Build)
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app

# Copia os ficheiros de configuração e dependências primeiro (aproveita o cache do Docker)
COPY pom.xml .
COPY src ./src

# Compila o projeto ignorando os testes para ser mais rápido
RUN mvn clean package -DskipTests

# 2. Estágio de Execução (Runtime)
FROM eclipse-temurin:17-jre
WORKDIR /app

# Copia o jar gerado no estágio anterior dinamicamente
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

# Comando para iniciar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]