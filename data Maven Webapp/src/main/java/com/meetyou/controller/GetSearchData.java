package com.meetyou.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;
import com.meetyou.entity.SearchData;
import com.meetyou.service.SearchDataService;


/**
 * <p>文件名称：SearchController.java</p>
 * <p>文件描述：</p>
 * <p>版权所有： 版权所有(C)2013-2099</p>
 * <p>公   司： 美柚 </p>
 * <p>内容摘要： </p>
 * <p>其他说明： </p>
 *
 * @version 1.0
 * @author <a> href="mailto:chenzhiwei@linggan.com">chenzhiwei</a>
 * @since 2016-01-28 上午11:06:55
 */
@Controller
public class GetSearchData {
	@Resource
	private SearchDataService searchDataService;
	@RequestMapping("getSearchData")
	  public void getSearchData(HttpServletRequest request , HttpServletResponse response , HttpSession session ) throws IOException {
		PrintWriter out = null;
		out = response.getWriter();
		String startDate = request.getParameter("start");
		String endDate = request.getParameter("end");
		//ArrayList<SearchData> list = searchDataService.getAllData();
		ArrayList<SearchData> list = searchDataService.getData(startDate, endDate);
		String json = JSON.toJSONString(list);
		out.write(json);
	}
}




















