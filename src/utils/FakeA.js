// create a React component named FakeA to replace the <a> tag

export default function FakeA({ href, children, ...props }) {

    return (
    // not use <a> tag, but use <p> tag instead
    <p
      href={href}
      className={{
        color: "blue",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={() => {window.open(href, '')}}
      {...props}
    >
      {children}
    </p>
  );
}
