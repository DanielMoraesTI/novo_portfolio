# Daniel Moraes — Portfólio

Portfólio pessoal de Daniel Moraes: advogado com mais de 15 anos de
experiência, em transição de carreira para a área de tecnologia.
Construído com **Next.js (App Router)**, **React**, **TypeScript**,
**Tailwind CSS v4**, **shadcn/ui** (Base UI), **lucide-react** e
**motion**.

## Stack

- [Next.js 16](https://nextjs.org/) — App Router, Turbopack
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (base-ui primitives)
- [lucide-react](https://lucide.dev/) — ícones
- [motion](https://motion.dev/) — animações
- [next-themes](https://github.com/pacocoursey/next-themes) — modo claro/escuro
- [sonner](https://sonner.emilkowal.ski/) — notificações
- [Formspree](https://formspree.io/) — envio do formulário de contacto

## Estrutura

```
src/
  app/
    page.tsx            → Início (hero, sobre, formação, hobbies)
    experiencia/         → Experiências profissionais (timeline)
    projetos/             → Projetos em destaque (com deploy) + outros no GitHub
    contacto/             → Formulário (Formspree) e canais de contacto
    layout.tsx           → Layout raiz (header, footer, tema, fontes)
    globals.css           → Tokens de design / tema
  components/
    ui/                    → Componentes shadcn/ui
    site-header.tsx        → Cabeçalho + navegação (com menu mobile)
    site-footer.tsx        → Rodapé + redes sociais
    contact-form.tsx       → Formulário de contacto (ligado ao Formspree)
    reveal.tsx              → Wrapper de animação de entrada
  lib/
    data.ts                 → Todo o conteúdo do site (fácil de editar)
public/
  assets/                    → Imagens, ícones e vídeo originais
```

Todo o conteúdo textual (experiências, formação, links) está centralizado
em [`src/lib/data.ts`](src/lib/data.ts) — basta editar esse ficheiro para
atualizar o site.

## Variáveis de ambiente

Copiar [`.env.example`](.env.example) para `.env.local` e preencher:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Endpoint gerado ao criar um formulário em [formspree.io](https://formspree.io/).
Sem esta variável, o formulário de contacto mostra um erro amigável em vez
de enviar. Em produção (Vercel), configurar a mesma variável em
Project Settings → Environment Variables.

## Desenvolvimento

```bash
npm install
npm run dev       # http://localhost:3000
npm run build      # build de produção
npm run start       # serve o build de produção
npm run lint          # eslint
```

## Notas

- O ícone de WhatsApp é mantido por identidade visual, mas sem número de
  telefone associado — aponta para a página de contacto.
- O vídeo em `public/assets/videos` é o original do projeto estático.

---

© 2025–2026 Daniel Moraes · Projeto pessoal construído ao longo da
transição de carreira para tecnologia, combinando o aprendizado do
curso Frontend do Programa UPskill (Faculdade de Ciências da
Universidade de Lisboa) com trilhas da Alura — usado como espaço
próprio para testar conhecimentos, estruturas, serviços e layouts.
