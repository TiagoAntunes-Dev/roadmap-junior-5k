//  Stack (que faz tudo que o Slot fazia + navegação).
// Então no código final, só o Stack é necessário — importar os dois
// juntos (como estava no seu código) não tem efeito, já que o Slot
// nem é usado no JSX.
import { Stack, Slot } from 'expo-router';

// -----------------------------------------------------------------------
// O QUE É UM "LAYOUT FILE" (_layout.tsx)?
// -----------------------------------------------------------------------
// É um arquivo especial do Expo Router: qualquer arquivo chamado
// "_layout.tsx" (começando com underscore) dentro da pasta "app/" vira
// um COMPONENTE QUE ENVOLVE (wrap) as outras páginas daquela pasta.
//
// Serve pra colocar conteúdo comum que deve aparecer em TODAS as
// páginas — tipo um rodapé, um header, ou (como aqui) a navegação
// entre as telas.
//
// Importante: quando existe um "_layout.tsx" na pasta, o Expo Router
// para de renderizar a página "index" sozinha por padrão — ele passa
// a renderizar o LAYOUT primeiro, e cabe ao layout dizer ONDE dentro
// dele o conteúdo da página atual deve aparecer.
export default function RootLayout() {
  return (
    // -----------------------------------------------------------------
    // SLOT vs STACK — como "encaixar" o conteúdo da página no layout
    // -----------------------------------------------------------------
    // Antes de existir o <Stack>, a aula usa o <Slot> pra resolver esse
    // problema: o <Slot /> é tipo um "buraco"/placeholder no layout —
    // ele diz "renderize a página atual bem AQUI dentro do layout".
    // Sem ele (ou sem o Stack), o layout aparece na tela, mas nenhuma
    // página é mostrada.
    //
    // O <Stack> faz exatamente essa mesma função do Slot (mostra a
    // página atual no lugar dele), só que TAMBÉM adiciona navegação:
    // uma barra de cabeçalho (header) no topo com o título da página,
    // e um botão de "voltar" automático.
    //
    // Por isso o Stack recebeu esse nome: cada vez que você navega pra
    // uma nova página, ela é "empilhada" (stacked) por cima da anterior.
    // O botão de voltar simplesmente "desempilha" (pop) a página do
    // topo, revelando a que estava embaixo — igual uma pilha de pratos.
    //
    // Também não envolvemos o <Stack> numa <View> aqui: cada página
    // (index.tsx, about.tsx, contact.tsx) já tem sua própria <View>
    // como elemento raiz, então essa View extra no layout seria
    // redundante — o Stack pode (e deve) ser o elemento raiz do layout.
    <Stack
      // screenOptions aplica opções GLOBALMENTE a todas as telas do
      // Stack de uma vez (diferente do "options" dentro de cada
      // Stack.Screen individual, que só afeta aquela tela específica).
      screenOptions={{
        headerStyle: {
          // Cor de fundo do header (barra de cima) em todas as páginas.
          backgroundColor: '#ddd',
        },
        // Cor do TEXTO do título e do ícone de voltar no header.
        headerTintColor: '#333',
      }}
    >
      {/*
        Cada <Stack.Screen> REGISTRA uma tela dentro do Stack e permite
        configurar opções específicas pra ela.

        - "name" precisa bater exatamente com o nome do ARQUIVO (sem
          extensão) dentro da pasta "app/". Por isso "index", "about" e
          "contact" — sem esses nomes corresponderem, o Stack não sabe
          qual página está configurando.

        - "options" recebe um objeto com as configurações daquela tela.
          Aqui usamos "title", que define o texto mostrado no header.
          Por padrão, o título seria igual ao nome do arquivo (ex:
          "index", "about" em minúsculo) — por isso definimos
          explicitamente "Home", "About" e "Contact".
      */}
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact' }} />

      {/*
        Dica extra da aula: dá pra esconder o header de uma tela
        específica com "headerShown: false", assim:

        <Stack.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />
      */}
    </Stack>
  );
}

// Não precisamos de StyleSheet aqui: o layout não tem nenhum elemento
// visual próprio além do Stack