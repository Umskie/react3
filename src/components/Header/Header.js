const Header =()=> {
    return(<div>


<ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">Home</a></li>
  <li><a href="#!">Link</a></li>
  <li class="divider">Dropdown</li>
  <li><a href="#!">three</a></li>
</ul>
<nav>
  <div class="nav-wrapper">
    <a href="#!" class="brand-logo">Logo</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      {/* <!-- Dropdown Trigger --> */}
      <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>

    </div>)
}
export default Header