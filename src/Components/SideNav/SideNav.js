import SideNavItem from "./SideNavItem";

const SideNav = () => {
  return (
    <div className="absolute w-full left-0 bg-sidenav h-screen flex mt-16 flex-col overflow-y-auto">
      <div className="links w-full h-full mt-4 text-white">
        <SideNavItem name="HOME" />

        {/* LEAVE THIS COMPONENT AT THE BOTTOM */}
        <SideNavItem className="pb-48" />
      </div>
    </div>
  );
};

export default SideNav;
