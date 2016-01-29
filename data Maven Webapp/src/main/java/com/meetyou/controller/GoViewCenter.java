package com.meetyou.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <p>文件名称：GoDetail.java</p>
 * <p>文件描述：</p>
 * <p>版权所有： 版权所有(C)2013-2099</p>
 * <p>公   司： 美柚 </p>
 * <p>内容摘要： </p>
 * <p>其他说明： </p>
 *
 * @version 1.0
 * @author <a> href="mailto:cehnzhiwei@linggan.com">chenzhiwei</a>
 * @since 2016-01-28 下午2:37:02
 */
@Controller
public class GoViewCenter {
	@RequestMapping("godetail")
	public String goDetail() {
		return "detail";
	}
}

