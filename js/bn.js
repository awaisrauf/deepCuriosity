@import url(https://fonts.googleapis.com/css?family=Fira+Sans:200,400,500);

@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

* {
  border: 0;
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
body {
  height: inherit;
  display: flex;
  flex-direction: column;
  font-family: 'Fira Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #79838c;
}
a {
  color: #50585f;
  text-decoration: none;
  &:hover {
    color: #383e44;
  }
}

div.container {
  display: flex;
  flex: auto;
  flex-direction: column;
  max-height: 100%;
}
div.header {
  height: auto;
  text-align: center;
  background: slategrey;
  color: ghostwhite;
  padding: 2.3rem 1rem 2.3rem 1rem;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    bottom: -5rem;
    left: 0rem;
    height: 5.1rem;
    display: block;
    width: 100%;
    z-index: 300;
    background: -moz-linear-gradient(top, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(255,255,255,1) 20%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(255,255,255,1) 20%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
  }
  h1 {
    margin: {
      top: .8rem;
      bottom: .5rem;
    }
    font: {
      weight: 200;
      size: 1.6em;
    }
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    @media (min-width: 62em) {
      font-size: 1.9em;
      letter-spacing: 0.2rem;
    }
  }
  h2 {
    font: {
      size: 1.1em;
      weight: 400;
    }
    color: #cfd7de;
    max-width: 30rem;
    margin: auto;
  }
}

div.item {
  display: flex;
  flex: auto;
  overflow-y: auto;
  padding: 0rem 1rem 0rem 1rem;
}

#timeline {
  position: relative;
  display: table; //*For Firefox
  height: 100%;
  margin: {
    left: auto;
    right: auto;
    top: 5rem;
  }
  div {
    &:after {
      content: '';
      width: 2px;
      position: absolute;
      top: .5rem;
      bottom: 0rem;
      left: 60px;
      z-index: 1;
      background: #C5C5C5;
    }
  }
  h3 {
    position: -webkit-sticky;
    position: sticky;
    top: 5rem;
    color: #888;
    margin: 0;
    font: {
      size: 1em;
      weight: 400;
    }
    @media (min-width: 62em) {
      font-size: 1.1em;
    }
  }
  section.year {
  position: relative;
  &:first-child section{
    margin-top: -1.3em;
    padding-bottom: 0px;
  }
  section {
    position: relative;
    padding-bottom: 1.25em;
    margin-bottom: 2.2em;
    h4 {
      position: absolute;
      bottom: 0;
      font: {
        size: .9em;
        weight: 400;
      }
      line-height: 1.2em;
      margin: 0;
      padding: 0 0 0 89px;
      color: #C5C5C5;
      @media (min-width: 62em) {
        font-size: 1em;
      }
    }
    ul {
      list-style-type: none;
      padding: 0 0 0 75px;
      margin: -1.35rem 0 1em;
      max-width: 32rem;
      font-size: 1em;
      @media (min-width: 62em) {
        font-size: 1.1em;
        padding: 0 0 0 81px;
      }
      &:last-child {
        margin: {
          bottom: 0;
        }
      }
      &:first-of-type:after {
        content: '';
        width: 10px;
        height: 10px;
        background: #C5C5C5;
        border: 2px solid #FFFFFF;
        @include border-radius(50%);
        position: absolute;
        left: 54px;
        top: 3px;
        z-index: 2;
      }
      li {
        margin-left: .5rem;
        &:before {
          content: '·';
          margin-left: -.5rem;
          padding-right: .3rem;
        }
        &:not(:first-child) {
          margin-top: .5rem;
        }
        span.price {
          color: mediumturquoise;
          font-weight: 500;
        }
      }
    }
  }
}
}

#price {
  display: inline;
}

svg {
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
}
