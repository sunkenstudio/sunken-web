export const scrollToElement = (e: any) => {
  e.preventDefault();

  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");

  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};
