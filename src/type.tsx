export interface Service {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element ; // URL or class name for icons
    bgColor: string;
    textColor:string
  }
  
  export interface Testimonial {
    id: number;
    name: string;
    feedback: string;
    avatar: string; // URL to avatar image
  }

  export interface ServicePlus{
    title: string,
    description: string,
    details: string,
    icon: JSX.Element 
  }
  