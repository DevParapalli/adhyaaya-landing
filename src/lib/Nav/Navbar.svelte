<script>
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import roundMenu from '@iconify-icons/ic/round-menu.js';
</script>

<nav class="nav">
    <div class="items-container">
        <a href="/" class="logo-button btn btn-ghost btn-lg">
            <img src="/favicon.png" class="adhyaaya-logo" alt="adhyaaya-logo" />
        </a>
        <div class="dropdown-container">
            <!-- Dropdown menu -->
            <div class="dropdown-end dropdown">
                <div tabindex="0" class="dropdown-icon btn btn-ghost m-1">
                    <Icon class="{`h-8 w-8`}" icon="{roundMenu}" />
                </div>
                <ul tabindex="0" class="dropdown-content menu rounded-box w-52 bg-base-300 p-2 shadow">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/event/events">Events</a>
                    </li>
                    <li>
                        <a href="/event/sponsors">Sponsors</a>
                    </li>
                    <li>
                        <a href="/event/gallery">Gallery</a>
                    </li>

                    <li>
                        <a href="/event/register">Register</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="links-container" id="mobile-menu-2">
            <ul class="links-list">
                <li>
                    <a href="/" class="link" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/event/events" class="link">Events</a>
                </li>
                <li>
                    <a href="/event/sponsors" class="link">Sponsors</a>
                </li>
                <li>
                    <a href="/event/gallery" class="link">Gallery</a>
                </li>
                <li>
                    <a href="/event/register" class="link">Register</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<style lang="scss">
    .nav {
        position: sticky;
        top: 0;
        z-index: 10;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 0.625rem;
        padding-bottom: 0.625rem;
        background-color: transparent;
        width: 100%;
        border-radius: 0.25rem;
        border-color: #e5e7eb;

        @media (min-width: 640px) {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
    .items-container {
        width: 100%;
        display: flex;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .logo-button {
        display: flex;
        margin-left: 0.25rem;
        display: flex;
        border-radius: 1rem;
        border-width: 1px;
        max-width: 5rem;
    }
    .adhyaaya-logo {
        max-width: 5rem;
    }
    .dropdown-container {
        display: flex;
        display: flex;
        align-items: center;

        @media (min-width: 768px) {
            order: 2;
        }
    }
    .links-container {
        display: none;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        @media (min-width: 768px) {
            display: flex;
            display: flex;
            order: 1;
            width: auto;
        }
    }

    .links-list {
        display: flex;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
            margin-top: 0;
            margin-left: 2rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: 500;
            flex-direction: row;
        }
    }

    .link {
        display: block;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0.75rem;
        padding-right: 1rem;
        background-color: transparent;
        transition-property: background-color, border-color, color, fill, stroke;
        transition-duration: 150ms;
        color: #9ca3af;
    }
    .dropdown {
        visibility: visible;

        @media (min-width: 768px) {
            visibility: hidden;
        }
    }

    .dropdown-end {
    }

    .dropdown-icon {
        margin: 0.25rem;
    }
</style>
