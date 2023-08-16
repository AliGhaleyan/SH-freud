const Container = (props: React.PropsWithChildren) => {
  return (
    <div className="px-4 py-2">
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Container;
