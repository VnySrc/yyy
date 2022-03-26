<template>
  <div>
    <Header />
    <Reason />
    <div class="blog">
        <h1>VISITE NOSSO BLOG</h1>
        <div class="blog_cards">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">

.blog {
    margin: 0 auto;
    max-width: 120rem;

    h1 {
        color: $p-600;
        font-size: 2.4rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
        margin-top: 4rem;
    }

    &_cards {
        padding: 2rem 1.4rem;
        margin-bottom: 4rem;

        @include sm-up {
            padding: 2rem;
        }

        @include sm-up {
            display: flex;
        }

        div {
            height: 25rem;
            width: 100%;
            background: linear-gradient(45deg, $gray-600 0%, $gray-700 100%);

            &:nth-child(2) {
                margin: 2rem 0;

                @include sm-up {
                    margin: 0 1rem;
                }
            }                 
        }
    }
}

</style>