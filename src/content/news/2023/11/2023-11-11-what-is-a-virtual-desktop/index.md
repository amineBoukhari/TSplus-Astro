---
slug : 2023-11-11-what-is-a-virtual-desktop
tags: ['remote-access']
draft : false 
imageLink : What-is-a-virtual-desktop.png
title: "What Is a Virtual Desktop?"
date: "2023-11-11"

---

 [![Title of article "What is a virtual desktop?", TSplus Remote Access logo and tsplus.net link, illustrated by a picture of a computer in use.](./images/What-is-a-virtual-desktop.png)](https://tsplus.net/remote-access/)Once we have answered "what is a virtual desktop?" in short, we can broach the differences between virtual and remote desktops then go on to inspect their main advantages and disadvantages. Thus we can better grasp their potential uses and the benefits one or the other can bring in a given situation. Read on for a comparison between Virtual Desktop Infrastructure and what we at [TSplus](https://tsplus.net/) make possible via Remote Desktop Protocol.

## What is a Virtual Desktop?

A virtual desktop, also known as a virtualised desktop or VDI (Virtual Desktop Infrastructure), is a technology that allows users to access and interact with a desktop operating system and applications on a remote server, typically over a network connection. Instead of running the operating system and applications on their local computer, users connect to a virtual desktop hosted on a centralised server or cloud infrastructure.

## Alternative Technology to Virtual Desktops

Another way of making a desktop available remotely is RDP. Virtual Desktop Infrastructure (VDI) and Remote Desktop Protocol (RDP) are both technologies that enable remote access to desktop environments, but they differ in their architecture and primary use cases. As RDP is primarily used by Microsoft Remote Desktop Services (RDS), this part is going to generalise to RDS. Below are the key differences between VDI and RDS.

## Characteristics and Uses of a Virtual Desktop Infrastructure (VDI):

1. **Desktop Isolation:** In VDI, each user typically has their own dedicated virtual desktop machine. This means that users have full control over their desktop environment. Also, changes or installations a user makes neither affects the infrastructure nor impacts other users.
    
2. **Operating System:** VDI often provides a full desktop operating system, such as Windows, for each user. This allows for a more personalized and customized user experience.
    
3. **Resource Intensive:** VDI can be more resource-intensive because it can require separate virtual machines for each user. As a result, it may call for a more significant investment in hardware, staff involvement and the like.
    
4. **Persistent or non-persistent:** User desktops can be persistent or nonpersistent. This means users will either log into their own reserved virtual desktop each time or that all users log in and out of generic desktops which are therefore less customised and on which no personal data is kept once logoff is complete. The first option takes up more space and maintenance while the second is lighter on storage.
    
5. **Uses:** VDI is suitable for scenarios where users need a highly personalised desktop experience, require access to specific applications and where security and isolation are critical. **Some examples:**
    
    - Industries with strict security and compliance requirements, such as healthcare, finance, or government.
        
    - Requirements for personalized and customized desktop environments where employees need full control over their desktop settings and software installations.
        
    - Software developers and testers who need to work with different development environments, configurations and tools in isolated environments without impacting their local machines.
        
    - Organisations with a distributed or remote workforce, so employees access their personalised desktop environments from various locations and devices while maintaining a consistent user experience.
        
    - Resource-intensive applications such as 3D rendering, CAD design or data analysis where dedicated computing power is essential.
        

## Characteristics and Uses of Remote Desktop Services (RDS):

1. **Session-Based:** RDS, on the other hand, uses a session-based approach which uses less processing while in use. Multiple users share a single instance of an operating system and its applications. Each user has their own session, but they are essentially sharing the same underlying OS and resources.
    
2. **Resource Efficient:** RDS is typically more resource-efficient than VDI because users share resources. This can lead to cost savings in terms of hardware and management.
    
3. **Application-Centric:** RDS puts the emphasis on application publication and remote use. Users can access applications from their remote session without needing a full desktop environment.
    
4. **Adapted to Non-Standardised Infrastructures:** RDS, due to the fact that it enables both desktop access and application publication, offers the freedom to do either or both in varying combinations depending on fluctuating and diverse users and needs.
    
5. **Uses:** RDS is often used when the primary goal is to deliver specific applications to users. This means users can be given access to a desktop or a single application or anything in between, according to requirements, including a specific set of applications. Importantly, RDP can also be suited for perpetuation of legacy applications, as per our TSplus Remote Access capability. We are proud to say [many businesses and industries trust us.](https://tsplus.net/references/) **Examples of TSplus Remote Access in use:**
    
    - Industries using specific applications requiring powerful devices to run yet which benefit from employee mobility and thus need at least part of their device park to consist of lighter, smaller machines, such as tablets or smartphones.
        
    - Companies with budget constraints looking to maximize efficient use of resources by deploying software throughout their network, prolonging the life of hardware or software through the implementation of TSplus Remote Access.
        
    - Professionals delivering specific applications or tailored desktops to users whether providing software as a service (SaaS) or deploying specialised applications network-wide.
        
    - Organisations with a large number of users who can do without individualised desktops but instead require access to a common set of applications.
        
    - Settings where individual users need distant access to their usual devices from within or without the company network.
        
    - Smaller organisations or those without extensive IT expertise since TSplus Remote Access is both easier to set up and to manage.
        
    - Organisations that anticipate growth in the number of remote users. TSplus Remote Access enables companies to scale user access without significant increases in hardware or software resources.
        
    - Desktops supporting remote and hybrid work where data privacy and security are paramount and compliance has to be verified.
        

## In Summary, How do RDS and VDI Compare?

The choice between VDI and RDS depends on the specific requirements and use cases of the organisation. VDI is generally more suitable for personalised desktop environments and high security requirements, while RDS is a more resource-efficient choice especially when the focus is on delivering applications to users. For RDS to be as secure as a VDI solution, it must either be used as part of an enclosed in-house infrastructure or given other security and safeguards. Or you could turn to a third option.

## How About RDP Without the Worry

Our company, TSplus, has developed an alternative to Citrix and RDS, in so far as it offers solutions related to VDI and RDS. In practice, our Remote Access provides both remote access and application publishing. Indeed, [TSplus Remote Access](https://tsplus.net/remote-access/) leverages RDP amongst other remote technologies yet is fully secure and encrypted thanks to its build and structure. So, you have all the advantages of RDP with as much security as VDI, especially if you activate the 2FA. And if you add our Advanced Security software, you can sleep soundly.

TSplus Remote Access is thus perfectly tailored to the needs of IT professionals who wish to efficiently use their IT infrastructure and can even be accessed purely via any web browser over HTML5 which makes its use entirely OS-independent. TSplus Remote Access enables full usage of your hardware and software, while enhancing and maximising its potential.

## What You Gain VS What You Lose: Pros and Cons

### Pros and Cons of Virtual Desktop Infrastructure (VDI):

##### Advantages:

1. _Independent Desktops:_ VDI provides users with personal dedicated virtual desktops, ensuring complete isolation of usage and data. This naturally enhances security and privacy, making it adapted for industries with strict compliance requirements.
    
2. _Personalisation:_ Users can fully personalise their virtual desktop environments, installing applications and customising settings as needed. This flexibility is beneficial for individuals who require a tailored desktop experience.
    
3. _Application Compatibility:_ VDI comes into its own in situations where users indifferently need access to a variety of software. It often supports a wide range of applications, as it provides a full desktop operating system.
    
4. _Security:_ With dedicated virtual desktops, the risk of data leakage or cross-contamination between users is minimised, contributing to improved security.
    
5. _Persistent and Non-persistent:_ this distinction aligns with the flexibility needed for different user requirements.
    

##### Disadvantages:

1. _Intensive in Resources:_ VDI can be more resource-intensive since it requires separate virtual machines for each user. This can rapidly lead to higher hardware and management costs. The upkeep of such an infrastructure will also lead to increased administrative and maintenance hours.
    
2. _Complex:_ Implementing and managing VDI can be more complex compared to RDS, requiring expertise in virtualisation and infrastructure management.
    
3. _Potential Compatibility Issues:_ Though it provides great compatibility, this may nevertheless hit a wall if the virtual OS of a particular desktop does not support specific applications.
    
4. _Cost:_ The initial setup and ongoing maintenance costs of VDI can be higher, which may not be suitable for organisations with budget constraints.
    

### Pros and Cons of Remote Desktop Protocol (RDP) with TSplus Remote Access:

##### Advantages:

1. _Legacy Application Publishing:_ Web-enabling applications saves industries and businesses the trouble of renewing their software for less adapted alternatives, with the accompanying learning curve. TSplus also frees companies to lengthen the life-span of their hardware and IT parks and reduce spending while chipping in protecting the environment.
    
2. _Resource-Efficient:_ With TSplus Remote Access, RDP is very efficient in resources because multiple users share a single operating system and its resources. This centralisation is also present in the memory and processing usage which all happens in the remote servers. This leads to savings not only in terms of hardware, software and management resources, but also in terms of cost and time.
    
3. _Simplified Management:_ RDP is native therefore easier to set up and manage. This makes it a more straightforward choice for organisations without extensive IT resources. With TSplus Remote Access, the options do not stop at standard RDP. As well as the classic Remote Desktop Connection (MSTSC.EXE), you can also use the [portable TSplus RDP client](https://tsplus.net/remote-access/installation/#choose-how-users-will-connect), the TSplus Seamless client MS RemoteAPP client, or even either the HTML5 or the Windows client over the TSplus Web Portal.
    
4. _Application-Centric:_ RDP is well-suited for delivering specific applications to users. TSplus puts it to use in an efficient way. Hence, you can provide your users with access to a set of applications without the need for a full desktop environment.
    
5. _Value-for-money:_ The initial setup and ongoing maintenance costs of VDI can be higher, which may not be suitable for organisations with budget constraints.
    
6. _Scalability:_ RDP is scalable and can accommodate a growing number of users without significant increases in resource requirements. As devices can be light and need less processing power, the cost of scaling up is reduced too.
    

##### Disadvantages - Not Any More:

1. _Limited Personalisation:_ typically, RDP users have limited control over the desktop environment since they share the same operating system. Though most customisations can be set in a few moments, this may not be suitable for users who require extensive customisation. On the other hand, with TSplus, remote technology enables users to access their own devices from anywhere, reopening the door to personalised spaces.
    
2. _Security Concerns:_ These are wiped out since, thanks to TSplus Remote Access, RDP can be secured. All the more with our Enterprise bundle which includes [Advanced Security](https://tsplus.net/advanced-security/). With no data actually leaving the safety of the server and appropriate encryption, requirements are met or even exceeded. 2FA is available and Advanced Security provides all-round cyber-security and more to boot. The result is a shared environment has nothing to envy from VDI's isolated desktops.
    
3. _Application Compatibility:_ RDS may have limitations when it comes to supporting certain applications. This may especially apply to those requiring a dedicated desktop environment or those incompatible with the Microsoft OS. TSplus though, frees IT, remote desktops and RDP from compatibility constraints by simply making everything securely available over HTML5.
    

## Conclusion on What is a Virtual Desktop

In summary, VDI is well-suited to situations where security, personalisation and individual desktop isolation are crucial. Meanwhile, RDS is advantageous for organisations looking for a cost-effective, resource-efficient solution that focusing on application delivery and simplified management. On the other hand, it remains less secure. Certainly, any choice depends on the specific use cases, needs, budget and goals of an organisation. Choosing between VDI and RDS is no different.

**[Enter TSplus](https://tsplus.net/pricing/), with Remote Access and RDP but not only, best value-for-money compared to RDS and VDI alike and safe enough for HIPAA and other demanding compliance. For a versatile and scalable solution to your remote desktop needs, our simple yet highly configurable software is at the ready. Will you web-enable applications, release your staff and company into tele-working and hybrid office possibilities, lower you hardware and software bills, or all of the above?.**
