export function projectHtml(project) {
  const features = project.features;

  let text_link = "";
  let image_link = "";

  if (project.website_url) {
    text_link = `<a href="${project.website_url}">View Website</a>`;
    image_link = `<a title="View the website" aria-label="View the website" href="${project.website_url}"></a>`;
  } else {
    text_link = "";
    image_link = "";
  }

  return `
      <section class="container">
        <h1>${project.title}</h1>
        <p class="lead">${project.description}</p>
        <a class="cta-scroll" href="#introduction"><span class="material-icons">keyboard_arrow_down</span></a>
      </section>
      <div class="container__image--container">
        <img class="container__image" src="${project.image_url}" alt="${project.image_alt}" />
        ${image_link}
        </div>
      <section class="container" id="introduction">
        <h2>Introduction</h2>
        <p>${project.introduction}</p>
      </section>
      <section class="container">
        <h2>Features</h2>
        <p>${features.features_intro}</p>
        <h3>${features.feature_title_1}</h3>
        <p>${features.feature_desc_1}</p>
        <h3>${features.feature_title_2}</h3>
        <p>${features.feature_desc_2}</p>
        <h3>${features.feature_title_3}</h3>
        <p>${features.feature_desc_3}</p>
      </section>
      <div class="container__links">
        ${text_link}<a href="${project.source_url}">View Source</a><a href="/">Return Home</a>
      </div>`;
}
