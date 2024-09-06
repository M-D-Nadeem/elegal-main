import FooterList from "./FooterList";
import FooterListItem from "./FooterListItem";

const Footer = () => {
    return(
        <div className="w-full h-footer flex flex-col bg-navbar mt-20 text-white items-center">
            <div className="content flex flex-row w-full h-3/5 p-8 lg:px-20 pt-12 lg:pt-16 max-w-screen-2xl">
            <FooterList title="eLegal" className="w-1/2 lg:w-1/5">
                <FooterListItem>About Us</FooterListItem>
                <FooterListItem>Blogs</FooterListItem>
                <FooterListItem>Careers</FooterListItem>
                <FooterListItem>Contact Us</FooterListItem>
            </FooterList>
            <FooterList title="Social" className="w-1/2 lg:w-1/5">
                <FooterListItem>Facebook</FooterListItem>
                <FooterListItem>Instagram</FooterListItem>
                <FooterListItem>Youtube</FooterListItem>
                <FooterListItem>Twitter</FooterListItem>
                <FooterListItem>LinkedIn</FooterListItem>
            </FooterList>
            <FooterList title="For Clients" className="w-1/2 hidden lg:flex lg:w-1/5">
                <FooterListItem>Advocates</FooterListItem>
                <FooterListItem>Law Firms</FooterListItem>
                <FooterListItem>Document Writers</FooterListItem>
                <FooterListItem>Notaries</FooterListItem>
                <FooterListItem>Mediators</FooterListItem>
            </FooterList>
            <FooterList title="For Service Providers" className="w-1/2 hidden lg:flex lg:w-1/5">
                <FooterListItem>Join eLegal</FooterListItem>
                <FooterListItem></FooterListItem>
                <FooterListItem></FooterListItem>
                <FooterListItem></FooterListItem>
                <FooterListItem></FooterListItem>
            </FooterList>
            <FooterList title="More" className="w-1/2 hidden lg:flex lg:w-1/5 ">
                <FooterListItem>FAQs</FooterListItem>
                <FooterListItem>Terms & Conditions</FooterListItem>
                <FooterListItem>Help</FooterListItem>
                <FooterListItem>Twitter</FooterListItem>
                <FooterListItem>LinkedIn</FooterListItem>
            </FooterList>
            </div>
            <div className="copyright flex flex-col w-full h-2/5 items-center">
                <div className="name text-7xl lg:text-8xl font-extrabold">• eLegal •</div>
                <div className=" mt-4 lg:mt-8">Copyright © 2023, eLegal. All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer;