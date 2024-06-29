<template>
    <footer class="footer heading-quaternary">
        <div>
            <p>© 2024 - Todos os direitos reservados</p>
            <p>Desenvolvido por <a href="https://github.com/colcic-uesc/front-end-project-winx" target="_blank">Grupo das Winx</a></p>
        </div>
    </footer>
</template>

<style scoped>
    footer{
        display: flex;
        justify-content: center;
        background-color: var(--color-primary);
        text-align: center;
        color: var(--color-white);
    }

    p{
        margin: 0;
        padding: 0px;
    }

    div{
        padding: 40px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    a{
        color: var(--color-secondary);
    }

    a:hover{
        color: var(--color-secondary-hover);
    }

    a:visited{
        color: var(--color-secondary);
    }

    a:visited:hover{
        color: var(--color-secondary-hover);
    }


</style>